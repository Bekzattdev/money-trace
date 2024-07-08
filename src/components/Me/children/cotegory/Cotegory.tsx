import { ReactNode, FC, useState, memo, useRef, useEffect } from "react";
import scss from "./cotegory.module.scss";
import { useData } from "../../stateMenage";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { getCotegory } from "../../api";

interface FormType {
  name: string;
  image: any;
}

const Cotegory: FC = memo((): ReactNode => {
  const { cotegory, setCotegory } = useData();
  const fileRef = useRef<any>(null);
  const { handleSubmit, register, setValue } = useForm();
  const { ref, ...rest } = register("image", { required: false });
  const [addModa, setAddModal] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [isAddLoading, setIsAddLoading] = useState<boolean>(false);
  const [data, setData] = useState(cotegory);

  const API: any = import.meta.env.VITE_URL_PUBLICK;
  const token = localStorage.getItem("token");

  const handleCotegorySubmit: SubmitHandler<FormType | any> = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    if (data.image.length === 1) {
      formData.append("image", data.image[0]);
    }

    setIsAddLoading(true);
    try {
      const { data } = await axios.post<CotegoryGetType>(
        API + "/categories/",
        formData,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      const response = await getCotegory(API, token);
      setData(response);
      setCotegory(response);
    } catch (error: any) {
      console.error(error.response.data.name[0]);
    } finally {
      setIsAddLoading(false);
      setValue("name", "");
      setValue("image", []);
    }
  };

  const handleSearch = () => {
    setData(cotegory.filter((item) => item.name.includes(search)));
  };

  const handleDeleteCotegory = async (id: number) => {
    try {
      await axios.delete(API + `/categories/${id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      const response = await getCotegory(API, token);
      setData(response);
      setCotegory(response);
    } catch (error: any) {
      console.error(error.response.data.name[0]);
    }
  };

  useEffect(handleSearch, [search]);

  return (
    <>
      <div
        className={`${scss.add_modal} ${addModa ? scss.is_active : ""}`}
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
              <form onSubmit={handleSubmit(handleCotegorySubmit)}>
                <label>
                  Имя
                  <input
                    type="text"
                    placeholder="имя.."
                    {...register("name", { required: true })}
                  />
                </label>
                <label>
                  Выбрать изображение
                  <button
                    onClick={() => fileRef.current.click()}
                    type="button">
                    Файлы
                  </button>
                  <input
                    accept="image/*"
                    type="file"
                    {...rest}
                    name="image"
                    ref={(e) => {
                      ref(e);
                      fileRef.current = e;
                    }}
                    style={{ display: "none" }}
                  />
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
      <section className={scss.cotegory}>
        <div className={scss.search}>
          <h1>Категории</h1>
          <input
            value={search}
            onChange={({ target }) => setSearch(target.value)}
            type="text"
            placeholder="поиск.."
          />
          <button>Найти</button>
          <button onClick={() => setAddModal((prev) => !prev)}>Добавить</button>
        </div>
        <div className={scss.data}>
          <div className={scss.list}>
            {data.map((item, idx) => (
              <div
                className={scss.item}
                key={idx}>
                <img
                  src={item.image}
                  alt=""
                />
                <div className={scss.name}>{item.name}</div>
                <div className={scss.actions}>
                  <button onClick={() => handleDeleteCotegory(item.id)}>
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});

export default Cotegory;
