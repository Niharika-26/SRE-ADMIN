from sqlalchemy.orm.session import Session
from sqlalchemy.sql import func
from schemas import TaskBase
from db.models import DbEnvironment,DbJob,DbJobEnvironment,DbTask
from datetime import date, timedelta
import json


def get_all_tasks(db: Session):
    job = db.execute('select * from public.get_jobs()').all()
    job = [{
      "value": data["name"],
      "label": data["name"],
      "key": data['job_id']
    } for data in job]
    tasks = db.execute("select * from public.get_tasks()").all()
    return {"jobs": job,"tasks":tasks }

def get_environments(db: Session, request:str):
    environment = db.execute(f"select * from public.get_environment_list('{request}')").all()
    environment = environment = [{
      "value": data["name"],
      "label": data["name"],
      "key":data["environment_id"]
    } for data in environment]
    return environment


def create_task(db: Session,request: TaskBase):
    job_environment_id = db.query(DbJobEnvironment.job_environment_id).filter(DbJobEnvironment.job_id==request.job_id).filter(DbJobEnvironment.environment_id == request.environment_id).all()
    print(job_environment_id,"sdxvcgzfcbdfx")
    # modifieddate = date.today().strftime("%d-%m-%y")
    # duedate = date.today()+timedelta(5)
    # if request.currenttask:
    #     newTask = dict(
    #         taskname= request.taskname,
    #         environmentname= request.environmentname,
    #         responsedata= request.currenttask["responsedata"],
    #         dueat= duedate.strftime("%d-%m-%y"),
    #         modifiedat= modifieddate,
    #         status= "pending",
    #         )
    # else:
    #     newTask = dict(
    #         taskname = request.taskname,
    #         environmentname = request.environmentname,
    #         responsedata ="fvfdvxc",
    #         dueat=duedate.strftime("%d-%m-%y"),
    #         modifiedat=modifieddate,
    #         status="success",
    #     )
    # file.insert(0,newTask)
    # overridedata=[]
    # for data in file:
    #     overridedata.append(json.dumps(data,indent=4))
    # overridedata = str(overridedata)
    # with open("data.json", "w") as outfile:
    #     outfile.write(overridedata)
    # return file
    # db.add(new_task)
    # db.commit()
    # db.refresh(new_task)
    tasks = db.execute("select * from public.get_tasks()").all()
    return tasks