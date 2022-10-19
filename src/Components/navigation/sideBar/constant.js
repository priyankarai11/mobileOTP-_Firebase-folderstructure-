/** @format */

import {
  Home,
  InsertChart,
  AccountBalanceWallet,
  LocalGroceryStore,
  Person,
  Lock,
  Brightness4,
  SwapVert,
} from "@material-ui/icons";

export const MENU = [
  {
    id: 1,
    logo: <Home />,
    name: "Dashboard",
  },
  {
    id: 2,
    logo: <InsertChart />,
    name: "Analyze",
  },
  {
    id: 3,
    logo: <AccountBalanceWallet />,
    name: "Wallet",
  },
  {
    id: 4,
    logo: <LocalGroceryStore />,
    name: "store",
    text:"ACCOUNT SETTING"
  },
  {
    id: 5,
    logo: <Person />,
    name: "Edit Profile",
  },
  {
    id: 6,
    logo: <Lock />,
    name: "Change Password",
  },
  {
    id: 7,
    logo: <Brightness4 />,
    name: "Dark Mode",
  },
  {
    id: 8,
    logo: <SwapVert />,
    name: "Sign Up",
  },
];
