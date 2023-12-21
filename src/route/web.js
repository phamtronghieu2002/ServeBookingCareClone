import express from "express";
import * as AllcodeController from "..//controllers//AllcodeController";
import * as UserController from "..//controllers//UserController";
import * as DoctorController from "..//controllers//DoctorController";
import * as MarkdownController from  "..//controllers//MardownController"
import * as ScheduleController from  "..//controllers//ScheduleController"
import * as docSpeClin from "..//controllers//DoctorClinicSpecial"
import * as doctorInforController from "..//controllers//DoctorInforController"
import * as bookingController from "..//controllers//bookingController" 
import * as vefifyController from "..//controllers//VerifyController" 
const router = express.Router();

const InitApiRoute = (app) => {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  router.get("/allcode/:typeID", AllcodeController.handleGetAllcode);
  router.get("/user/role/:roleid", UserController.handleGetUserByRole);
  router.post("/user/:descriminator", UserController.handleAddUser);
  router.post("/user", UserController.handleAddUser);
  router.get("/doctors", DoctorController.handleGetAllDoctor);
  router.get("/doctors/limit/:limit", DoctorController.handleGetDoctorLimit);
  router.get("/doctor/:id", DoctorController.handleGetDoctorById);
  router.post("/markdown/:descriminator", MarkdownController.handleAddMarkdown);
  router.post("/schedules",ScheduleController.handleAddSchedule)
  router.get("/schedulesByDocTime",ScheduleController.handleGetSheduleByDocTime)
  router.get("/docClinSpe/:doctorID",docSpeClin.handleFindAll);
  router.post("/docClinSpe",docSpeClin.handeAdd);
  router.get("/doctorInfor/:doctorID",doctorInforController.handeFindAll);
  router.post("/booking",bookingController.handleAdd)
  router.get("/verify",vefifyController.hanldeVerify);

  app.use("/api/v1", router);
};

export { InitApiRoute };
