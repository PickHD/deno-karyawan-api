import { RouterMiddleware, Status } from "https://deno.land/x/oak/mod.ts";

import db from "../config/db.ts";

const Employees = db.database.collection("employees");

export const createKaryawan: RouterMiddleware = async (context) => {
  const body = await context.request.body();
  const _id = await Employees.insertOne(body.value);
  context.response.status = Status.Created;
  context.response.body = {
    success: true,
    data: {
      _id,
      ...body.value,
    },
  };
};

export const getAllKaryawan: RouterMiddleware = async (context) => {
  const allEmployee = await Employees.find();
  context.response.status = Status.OK;
  context.response.body = {
    data: allEmployee,
  };
};

export const getKaryawanWithId: RouterMiddleware = async (context) => {
  const { _id } = context.params;
  const employeeData = await Employees.findOne({ _id: { $oid: _id } });

  if (!employeeData) {
    context.throw(
      Status.NotFound,
      `Employee with id:${_id} not found,please try again`
    );
  }
  context.response.status = Status.OK;
  context.response.body = { success: true, data: employeeData };
};

export const updateKaryawanWithId: RouterMiddleware = async (context) => {
  const { _id } = context.params;

  const body = await context.request.body();
  const { matchedCount } = await Employees.updateOne(
    { _id: { $oid: _id } },
    { $set: body.value }
  );

  if (matchedCount === 0) {
    context.throw(
      Status.NotFound,
      `Employee with id:${_id} not found,please try again`
    );
  }
  context.response.status = Status.OK;
  context.response.body = {
    success: true,
    message: "Employee Updated!",
  };
};

export const deleteKaryawanWithId: RouterMiddleware = async (context) => {
  const { _id } = context.params;
  const deleteEmployee = await Employees.deleteOne({ _id: { $oid: _id } });
  if (deleteEmployee === 0) {
    context.throw(
      Status.NotFound,
      `Employee with id:${_id} not found,please try again`
    );
  }
  context.response.status = Status.OK;
  context.response.body = {
    success: true,
    message: "Employees Deleted!",
  };
};
