import { db } from "@/lib/db";

type Props = {
  children: React.ReactNode;
};
const AuthLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 flex items-center justify-center py-8">
      {children}
    </div>
  );
};

export default AuthLayout;
