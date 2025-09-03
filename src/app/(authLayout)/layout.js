const AuthLayout = ({ children }) => {
  return (
    <div>
      <h1 className="text-3xl py-5 text-center">Login/Register</h1>
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
