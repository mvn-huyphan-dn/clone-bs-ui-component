import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Sidebar, Footer, Header } from "../components";
import ButtongroupPage from "./Features/ButtongroupPage";
import {
  AccordionPage,
  AlertsPage,
  BadgePage,
  BreadcrumbPage,
  ButtonPage,
  Home,
} from "./Features";
import CardPage from "./Features/CardPage";
import DropdownPage from "./Features/DropdownPage";
import ListgroupPage from "./Features/ListgroupPage";
import ModalPage from "./Features/ModalPage";

export default function Pages() {
  const [showSidebar, setShowSidebar] = useState(true);

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  return (
    <div className="page-wrcapper">
      <Sidebar showSidebar={showSidebar} />
      <div className={`page-body flex-column${showSidebar ? "" : " active"}`}>
        <Header showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        <main className="page-main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/accordion">
              <AccordionPage />
            </Route>
            <Route path="/alerts">
              <AlertsPage />
            </Route>
            <Route path="/badge">
              <BadgePage />
            </Route>
            <Route path="/breadcrumb">
              <BreadcrumbPage />
            </Route>
            <Route path="/button">
              <ButtonPage />
            </Route>
            <Route path="/button-group">
              <ButtongroupPage />
            </Route>
            <Route path="/card">
              <CardPage />
            </Route>
            <Route path="/dropdown">
              <DropdownPage />
            </Route>
            <Route path="/list-group">
              <ListgroupPage />
            </Route>
            <Route path="/modal">
              <ModalPage />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
}
