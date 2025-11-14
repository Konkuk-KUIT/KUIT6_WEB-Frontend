import { useParams, useLocation, useSearchParams } from "react-router-dom";

const PageId = () => {
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const changeQuery = () => {
    setSearchParams({ key: "123456" });
  };

  return (
    <div>
      PageId
      <div>{JSON.stringify(params)}</div>
      <div>{params.PageId}</div>
      <div>{location.pathname}</div>
      <div>{location.search}</div>
      <div>{searchParams.get("value")}</div>
      <button onClick={changeQuery}>쿼리 바꾸기</button>
    </div>
  );
};

export default PageId;
