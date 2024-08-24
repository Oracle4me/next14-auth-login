"use client";

import { FormError } from "@/components/form-error";
import { userCurrentRole } from "@/hooks/user-current-role";
import { UserRole } from "@prisma/client";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const user = userCurrentRole();

  if (!user || user.role !== allowedRole) {
    return (
      <FormError message="Kamu tidak mendapatkan akses untuk melihat konten ini!" />
    );
  }
  return <>{children}</>;
};
