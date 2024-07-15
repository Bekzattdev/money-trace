import { ReactNode, FC, useState } from "react";
import scss from "./incomes.module.scss";
import { useData } from "../../stateMenage";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import "@/src/index.scss";
import { getBalance, getIncomes } from "../../api";

const IncomesPage: FC = (): ReactNode => {
  const { incomes, cotegory, setIncomes, setBalance } = useData();
  const { handleSubmit, register, setValue } = useForm();
  const [isAddLoading, setIsAddLoading] = useState<boolean>(false);
  const [addModal, setAddModal] = useState<boolean>(false);
  const API = import.meta.env.VITE_URL_PUBLICK;
  const token = localStorage.getItem("token");

  const handleincomes: SubmitHandler<any> = async (fd) => {
    try {
      setIsAddLoading(true);
      await axios.post(API + "/incomes/", fd, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      const response = await getIncomes(API, token);
      setIncomes(response);

      const balance = await getBalance(API, token);
      setBalance(balance);
    } catch (err: any) {
      console.log(err.response.data);
    } finally {
      setValue("comments", "");
      setValue("amount", "");
      setIsAddLoading(false);
    }
  };

  const handleDeleteIncome = async (id: number) => {
    try {
      await axios.delete(API + `/incomes/${id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      const response = await getIncomes(API, token);
      setIncomes(response);

      const balance = await getBalance(API, token);
      setBalance(balance);
    } catch (error: any) {
      console.error(error.response.data);
    }
  };

  return (
    <>
      <div
        className={`${scss.add_modal} ${addModal ? scss.is_active : ""}`}
        onClick={() => setAddModal(false)}>
        <div
          className={scss.content}
          onClick={(e) => e.stopPropagation()}>
          {isAddLoading ? (
            "loading.."
          ) : (
            <>
              <div className={scss.action}>
                <h2>Добавит доход</h2>
                <button onClick={() => setAddModal(false)}>закрыть</button>
              </div>
              <form onSubmit={handleSubmit(handleincomes)}>
                <label>
                  Сумма дохода
                  <input
                    type="number"
                    placeholder="321.."
                    {...register("amount", { required: true })}
                  />
                </label>
                <label>
                  Комментарии к доходу
                  <input
                    type="text"
                    placeholder="комментарий.."
                    {...register("comments", { required: true })}
                  />
                </label>

                <label>
                  Дата
                  <input
                    type="date"
                    id="start"
                    // value={formatDate(new Date())}
                    min="2018-01-01"
                    {...register("date", { required: true })}
                  />
                </label>

                <label>
                  Котегория
                  <select
                    id="mySelect"
                    {...register("category", { required: true })}>
                    {cotegory.map((item, idx) => (
                      <option
                        key={idx}
                        value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </label>

                <button
                  className={scss.form_submit}
                  type="submit">
                  Добавить
                </button>
              </form>
            </>
          )}
        </div>
      </div>
      <section className={scss.incomes}>
        <div className={scss.search}>
          <button onClick={() => setAddModal((prev) => !prev)}>Добавить</button>
        </div>
        <div className={scss.incomes}>
          <table>
            <thead>
              <tr>
                <th scope="col">Сумма дохода</th>
                <th scope="col">Дата</th>
                <th scope="col">Котегория</th>
                <th scope="col">Комментарии</th>
                <th scope="col">Удалить</th>
              </tr>
            </thead>
            {incomes.map((item, idx) => (
              <tr key={idx}>
                <th scope="row">{item.amount} сом</th>
                <td>{item.date}</td>
                <td>{item.id}</td>
                <td>{item.comments}</td>
                <td>
                  <button onClick={() => handleDeleteIncome(item.id)}>
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </section>
    </>
  );
};

export default IncomesPage;
