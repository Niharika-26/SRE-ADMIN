from sqlalchemy.orm.session import Session
from schemas import TaskBase
from db.models import DbEnvironment,DbJob
from datetime import date, timedelta
import json

file=open("data.json")
file=json.load(file)

def get_all_tasks(db: Session):
    environment =db.query(DbEnvironment.name).all()
    environment = [{
      "value": data["name"],
      "label": data["name"],
    } for data in environment]
    job = db.query(DbJob.name).all()
    job = [{
      "value": data["name"],
      "label": data["name"],
    } for data in job]
    return {"environments": environment,"jobs": job, "tasks":file}


def create_task(db: Session,request: TaskBase):
    modifieddate = date.today().strftime("%d-%m-%y")
    duedate = date.today()+timedelta(5)
    if request.currenttask:
        newTask = dict(
            taskname= request.taskname,
            environmentname= request.environmentname,
            responsedata= request.currenttask["responsedata"],
            dueat= duedate.strftime("%d-%m-%y"),
            modifiedat= modifieddate,
            status= "pending",
            )
    else:
        newTask = dict(
            taskname = request.taskname,
            environmentname = request.environmentname,
            responsedata ="fvfdvxc",
            dueat=duedate.strftime("%d-%m-%y"),
            modifiedat=modifieddate,
            status="success",
        )
    file.insert(0,newTask)
    overridedata=[]
    for data in file:
        overridedata.append(json.dumps(data,indent=4))
    overridedata = str(overridedata)
    with open("data.json", "w") as outfile:
        outfile.write(overridedata)
    return file
    # db.add(new_task)
    # db.commit()
    # db.refresh(new_task)
    # return db.query(DbTask).all()