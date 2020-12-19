import React, { ReactElement, useContext } from "react";
import { LoginForm } from "..";
import { Card } from "../../shared-components";
import { UserContext } from "../../state/UserContext";

export function WelcomeCard(): ReactElement {
  const userContext = useContext(UserContext);
  const { user } = userContext!;

  return (
    <Card raised>
      {user?._id && <p>{`Welcome ${user?.username}!`}</p>}
      {!user?._id && <LoginForm />}
    </Card>
  );
}
