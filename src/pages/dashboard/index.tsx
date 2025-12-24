import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { WalletDetails } from "../../components/dashboard/WalletDetails";
import { StyledPage } from "../../styles/pages";

const Dashboard: NextPage = () => {
  const [userInfo, setUserInfo] = useState();
  const router = useRouter();

  useEffect(() => {
    const raw = localStorage.getItem("@brix/user") || '{}';
    const user = JSON.parse(raw);
    setUserInfo(user);
    console.log(user);

    if(!user) {
      alert("Faça login para acessar o dashboard!");
      router.push("/login");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledPage>
      <WalletDetails user={userInfo} />
    </StyledPage>
  );
};

export default Dashboard;
