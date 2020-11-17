import React, { useEffect } from "react";
import "./Accountpage.css";
import Accounts from "./Accounts";
import { useDispatch, useSelector } from "react-redux";
import all_user from "../../Redux/Actions/All_users";
import select_user from "../../Redux/Actions/Select_user";
import { useHistory } from "react-router-dom";

function Accountpage(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const users_all = useSelector((state) => state);
  console.log(users_all);

  useEffect(() => {
    dispatch(all_user());
  }, [dispatch]);

  const click_handler = (user) => {
    console.log(user);
    dispatch(select_user(user));
  };
  const account_selected = () => {
    props.acc_selected();
  };

  return (
    <>
      <div className="container">
        <div className="accounts_container">
          <div className="account_header">
            <h4>select an acccont</h4>
          </div>
          <div className="account_body">
            {users_all
              ? users_all.users.map((data) => (
                  <>
                    <div key={data.id} onClick={account_selected}>
                      <Accounts
                        name={data.name}
                        clickable={() => click_handler(data)}
                        img_url={data.profilepicture}
                      />
                    </div>
                  </>
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Accountpage;
