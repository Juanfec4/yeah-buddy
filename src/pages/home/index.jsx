import useStore from "../../store/useStore";
import { useEffect } from "react";
const HomePage = () => {
  const { fetchPlans, plans } = useStore((state) => state);

  useEffect(() => {
    fetchPlans();
  }, []);

  console.log(plans.data);
  return <div>Home</div>;
};
export default HomePage;
