import React, { Suspense } from "react";
import { getHostIncome } from "../../api";
import { requireAuth } from "../../utils/AuthRequired";
import { Await, defer, useLoaderData } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import image from "../../assets/income-graph.png";

export async function loader({ request }) {
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  await requireAuth(request);
  return defer({ income: null });
}
function Income() {
  const dataPromise = useLoaderData();
  const renderElement = (income) => {
    return (
      <section className="host-income">
        <h1>Income</h1>
        <p>
          Last <span>30 days</span>
        </p>
        <h2>$130000</h2>
        <img className="graph" src={image} alt="Income graph" />
        <div className="info-header">
          <h3>Your transactions (3)</h3>
          <p>
            Last <span>30 days</span>
          </p>
        </div>
        <div className="transactions">
          {transactionsData.map((item) => (
            <div key={item.id} className="transaction">
              <h3>${item.amount}</h3>
              <p>{item.date}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  const transactionsData = [
    { amount: 50000, date: "December 29, 2022", id: "1" },
    { amount: 40000, date: "December 20, 2022", id: "2" },
    { amount: 40000, date: "December  6, 2022", id: "3" },
  ];
  return (
    <div className="car-list-container">
      <h1>Explore our cars options</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <Await resolve={dataPromise.cars}>{renderElement}</Await>
      </Suspense>
    </div>
  );
}

export default Income;
