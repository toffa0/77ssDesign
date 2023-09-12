import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BASE_URL, API_VERSION } from "@/config";
import { useRouter } from "next/router";
import useAuth from "@/contexts/auth.contexts";

const Navbar = () => {
  const { user } = useAuth();
  const router = useRouter();
  if (typeof window !== "undefined") {
    window.addEventListener("click", function (e) {
      if (document.getElementById("icon-menu")) {
        if (document.getElementById("icon-menu").contains(e.target)) {
          handleClick();
        } else {
          setShowMenu(true);
        }
      }
      if (document.getElementById("actions")) {
        if (document.getElementById("actions").contains(e.target)) {
          handleWorkClick();
        } else {
          setShowWorkMenu(true);
        }
      }
    });
  }
  const [user_details, setUser_details] = useState(null);
  useEffect(() => {
    setUser_details(user);
  }, [user]);
  const [showMenu, setShowMenu] = useState(true);
  const [showWorkMenu, setShowWorkMenu] = useState(true);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  const handleWorkClick = () => {
    setShowWorkMenu(!showWorkMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("access_token");
    router.reload();
  };

  return (
    <nav className="navbar">
      <div className="right2">
        <Link href="/">
          <Image
            src="logo1.svg"
            alt="Logo"
            className="logo"
            width={148}
            height={40}
          />
        </Link>
        <div className="fl fl-gap5">
          <Link href="/categories2">Categories</Link>
          <Link href="/Discover">Discover</Link>
          <Link href="/Designers">Designers</Link>
        </div>
      </div>
      <div className="right2">
        <Link href="/help">Help</Link>
        <div className="action">
          <button className="navworkbtn" id="actions">
            Work
          </button>
          {!showWorkMenu && (
            <ul className="menu">
              <div className="p-t20 fl-col fl-gap23">
                <li className="menu-item">
                  <Link href="/BrowseContest">Browse contests</Link>
                </li>
                <li className="menu-item">
                  <Link href="/BrowseProjects">Browse Projects</Link>
                </li>
                <li className="menu-item">
                  <Link href="/My-work">My Work</Link>
                </li>
              </div>
            </ul>
          )}
        </div>

        {user_details ? (
          <div className="fl fl-gap5">
            <Link href="/">
              <Image
                src="env.svg"
                className="navicon"
                alt=""
                width={25}
                height={25}
              />
            </Link>
            <Link href="/">
              <Image
                src="bell.svg"
                className="navicon"
                alt=""
                width={25}
                height={25}
              />
            </Link>

            <div className="action">
              <i className="icon" id="icon-menu">
                <Image
                  src="PI.svg"
                  className="navicon"
                  alt=""
                  width={29}
                  height={30}
                />
              </i>
              {!showMenu && (
                <ul className="menu">
                  <div className="p-t20 fl-col fl-gap23">
                    <li className="menu-item">
                      <Link
                        href={
                          user.user_type === "designer"
                            ? "/AccountSettings-designer"
                            : "/AccountSettings/"
                        }
                      >
                        Account Settings
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link
                        href={{
                          pathname: "/profile",
                          query: { user_id: user.id },
                        }}
                      >
                        Profile
                      </Link>
                      {/* <Link href="/profile" query={user_id:user.id}>Profile</Link> */}
                    </li>
                    <li className="menu-item">
                      <Link href="/balance">Balance</Link>
                    </li>
                    <li className="menu-item">
                      <button href="#" onClick={handleLogout}>
                        Log Out
                      </button>
                    </li>
                  </div>
                </ul>
              )}
            </div>
          </div>
        ) : (
          <div>
            <Link href="/login">Login/SignUp</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
