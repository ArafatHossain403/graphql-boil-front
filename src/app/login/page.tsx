import LoginComponent from "@/components/login/Login.Component";

const LoginPage = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-blue-500 text-white p-4">
          <LoginComponent />{" "}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
