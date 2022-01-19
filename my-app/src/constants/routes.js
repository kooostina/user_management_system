import DepartmentsPage from "../Pages/DepartmentsPage";
import ErrorPage from "../Pages/ErrorPage";
import DepartmentItemPage from "../Pages/DepartmentItemPage";
import LogInPage from "../Pages/LoginPage";

export const publicRoutes = [
  {
    path: "/login",
    exact: true,
    component: LogInPage,
    // defaultAuthRedirection: true,
  },
  {
    path: "/",
    exact: true,
    component: LogInPage,
    // defaultAuthRedirection: true,
  },
  {
    path: "*",
    exact: true,
    component: ErrorPage,
  },
];

export const protectedRoutes = [
  {
    path: "/departments",
    exact: true,
    component: DepartmentsPage,
    // defaultInitRedirect: true,
  },
  {
    path: "/departments/:departmentId/employees",
    exact: true,
    component: DepartmentItemPage,
  },
];
