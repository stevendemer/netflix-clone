import Skeleton from "react-loading-skeleton";

export default function Loader() {
  return (
    <>
      <Skeleton count={4} height={20} width={30} circle />
    </>
  );
}
