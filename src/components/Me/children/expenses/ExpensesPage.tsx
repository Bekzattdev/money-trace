import { ReactNode, FC, useState } from "react";
import scss from "./expenses.module.scss";
import { useData } from "../../stateMenage";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import "@/src/index.scss";

const ExpensesPage: FC = (): ReactNode => {
  const { expenses, cotegory } = useData();
  const { handleSubmit, register, setValue } = useForm();
  const [isAddLoading, setIsAddLoading] = useState<boolean>(false);
  const [addModal, setAddModal] = useState<boolean>(false);

  const handleExpenses: SubmitHandler<any> = async (fd) => {
    const API = import.meta.env.VITE_URL_PUBLICK;
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.post(API + "/expenses/", fd, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log(data);
    } catch (err: any) {
      console.log(err.response.data);
    } finally {
      setValue("comments", "");
      setValue("amount", "");
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
                <h2>Добавит котегорию</h2>
                <button onClick={() => setAddModal(false)}>закрыть</button>
              </div>
              <form onSubmit={handleSubmit(handleExpenses)}>
                <label>
                  Сумма расхода
                  <input
                    type="number"
                    placeholder="321.."
                    {...register("amount", { required: true })}
                  />
                </label>
                <label>
                  Комментарии к расходу
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
      <section className={scss.expenses}>
        <div className={scss.search}>
          <button onClick={() => setAddModal((prev) => !prev)}>Добавить</button>
        </div>
        <div className={scss.expenses}>
          <table>
            <thead>
              <tr>
                <th scope="col">Сумма расхода</th>
                <th scope="col">Дата</th>
                <th scope="col">Котегория</th>
                <th scope="col">Комментарии</th>
                <th scope="col">Удалить</th>
              </tr>
            </thead>
            {expenses.map((item, idx) => (
              <tr key={idx}>
                <th scope="row">{item.amount} сом</th>
                <td>{item.date}</td>
                <td>{item.id}</td>
                <td>{item.comments}</td>
                <td>
                  <button>Удалить</button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </section>
    </>
  );
};

export default ExpensesPage;
