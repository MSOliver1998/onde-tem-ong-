import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { RiFilterOffFill, RiFilterFill } from "react-icons/ri";
import Button from "../../components/Button/Button";
import Card from "../../components/DashboardCard/Card";
import { api } from "../../services/api";
import { StyledDashboard } from "./styled";
import notFoundImg from "../../assets/imgs/magnifier.jpg";
import HeaderFull from "../../components/HeaderFull/HeaderFull";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export interface iOng {
  avatar: string;
  background: string;
  category: string;
  name: string;
  userType: string;
  userId: number;
  id: number;
  e: iOng;
}

const DashboardLoggedPage = () => {
  const [filterState, setfilterState] = useState<boolean>(false);
  const [ongs, setOngs] = useState<iOng[]>([]);
  const [auxOngs, setAuxOngs] = useState<iOng[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [notFound, setNotFound] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const { setUserLoading, userLoading } = useContext(UserContext);
  const ref = useRef<HTMLDivElement | null>(null);
  let mockOngs: iOng[];
  let filterCategories: string[] = [];
  let filters: string[] = [];
  if (ongs) {
    mockOngs = ongs;
    filterCategories = mockOngs.map((e) => e.category);
    filters = filterCategories.filter((e, i, arr) => {
      return arr.indexOf(e) === i;
    });
  }
  async function getOngs(page: number) {
    setUserLoading(true);
    try {
      const response = await api.get<iOng[]>(`/users`);
      const filteredOngs = response.data.filter((e) => e.userType !== "user");
      if (!response.data || !response) {
        return;
      }
      if (page === 0) {
        response && setOngs(filteredOngs);
        response && setAuxOngs(filteredOngs);
      }
      if (response.data.length > 0 && page > 1) {
        setOngs((prev) => [...prev, ...filteredOngs]);
        setAuxOngs((prev) => [...prev, ...filteredOngs]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUserLoading(false);
    }
  }
  function handleFilterButton(event: React.MouseEvent<HTMLElement>) {
    let target = event.target as HTMLElement;
    if (target.innerHTML === "Todos") {
      setAuxOngs(ongs);
    } else {
      setAuxOngs(
        ongs?.filter(
          (e) => e.category.toLowerCase() === target.innerHTML.toLowerCase()
        )
      );
    }
    setNotFound(false);
    setSearchValue("");
  }
  function handleSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let found: iOng[] | undefined = [];
    found = ongs?.filter(
      (e) =>
        e.category.toLowerCase().includes(searchValue) ||
        e.name.toLowerCase().includes(searchValue)
    );
    setAuxOngs(found);
    if (found?.length === 0) {
      setNotFound(true);
    } else if (found?.length > 0) {
      setNotFound(false);
    }
    setSearchValue("");
  }
  const options = useMemo(() => {
    return {
      root: null,
      rootMagin: "0px",
      threshold: 1,
    };
  }, []);
  
  useEffect(() => {
    let current = ref.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((currentPage) => currentPage + 1);
      }
    }, options);
    return () => {
      current && observer.observe(current);
    };
  }, [ref, options]);
  useEffect(() => {
    const token = localStorage.getItem("@token");
    if (token) {
      getOngs(page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeaderFull linkText="Página Inicial" linkTo="/" />
      <StyledDashboard>
        <div className="container">
          <section className="searchSection container">
            <div className="searchDiv ">
              <form
                onSubmit={(e) => {
                  handleSearchSubmit(e);
                }}
                action=""
              >
                <input
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.currentTarget.value);
                  }}
                  type="text"
                  placeholder="Pesquisar"
                />
                <button disabled={!searchValue} type="submit">
                  <BiSearchAlt2 />
                </button>
              </form>
              <button
                className="filterBtn"
                onClick={() => {
                  setfilterState(!filterState);
                }}
              >
                {filterState ? (
                  <RiFilterOffFill/>
                ) : (
                  <RiFilterFill/>
                )}{" "}
              </button>
            </div>
            <div className="categoriesDiv">
              <span
                className={filterState ? "block " : "hidden spanResponsive"}
              >
                Categorias:
              </span>
              <div
                className={filterState ? "popUpFilters" : "catogoriesFilterDiv"}
              >
                <ul className="categoriesList">
                  <Button
                    onClick={(e) => handleFilterButton(e)}
                    styled={"filled"}
                  >
                    Todos
                  </Button>
                  {filters &&
                    filters?.map((e, i) => {
                      return (
                        <Button
                          key={i}
                          onClick={(e) => handleFilterButton(e)}
                          styled={"filled"}
                        >
                          {e?.charAt(0).toUpperCase() + e?.slice(1)}
                        </Button>
                      );
                    })}
                </ul>
              </div>
            </div>
          </section>

          <section className="ongsSection ">
            <ul
              className={
                filterState ? "ongsList downPull container" : "ongsList "
              }
            >
              <>
                {auxOngs &&
                  auxOngs.map((e, i) => {
                    return (
                      <Card
                        userId={e.userId}
                        userType={e.userType}
                        e={e}
                        name={e.name}
                        avatar={e.avatar}
                        category={e.category}
                        id={e.id}
                        background={e.background}
                        key={i}
                      ></Card>
                    );
                  })}
              </>
            </ul>
            {userLoading && <AiOutlineLoading3Quarters className="loading" />}
            <div style={{ height: "35px" }} ref={ref}></div>
          </section>
        </div>
        <div className={notFound ? "searchNotFound" : "hidden"}>
          <img src={notFoundImg} id="notFoundImg" alt="" />
          <h3>
            Ooops! Não encontramos resultados para sua busca... Gostaria de
            procurar novamente?{" "}
          </h3>
          <div>
            <button
              onClick={() => {
                setAuxOngs(ongs);
                setNotFound(false);
              }}
            >
              Limpar Pesquisa
            </button>
          </div>
        </div>
      </StyledDashboard>
    </>
  );
};

export default DashboardLoggedPage;
