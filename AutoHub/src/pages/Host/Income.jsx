import React from 'react'
import { getHostIncome } from '../../api'
import { requireAuth } from '../../utils.js/AuthRequired'
import { defer, useLoaderData } from 'react-router-dom';

export async function loader({ request }) {
  const user = localStorage.getItem("user")
  const userData = JSON.parse(user);
  await requireAuth(request)
  return defer({income: getHostIncome(userData.user.uid) })
}
function Income() {
  const income = useLoaderData()
  console.log(income)
  return (
    <div>Income</div>
  )
}

export default Income
