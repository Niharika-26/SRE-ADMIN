from sqlalchemy.orm.session import Session
from schemas import TaskBase
from db.models import DbJobEnvironment

# Function to get all tasks
def get_all_tasks(db: Session):
    job = db.execute('select * from get_admin_job()').all()
    job = [{
      "value": data["name"],
      "label": data["name"],
      "key": data['job_id']
    } for data in job]
    tasks = db.execute("select * from get_admin_task()").all()
    return {"jobs": job,"tasks":tasks }

# Function to get all environments for a job
def get_environments(db: Session, request:str):
    environments = db.execute(f"select * from get_admin_environment('{request}')").all()
    environments = environment = [{
      "value": data["name"],
      "label": data["name"],
      "key":data["environment_id"]
    } for data in environments]
    return {"environments": environments}

# Function to create a task
def create_task(db: Session,request: TaskBase):
    job_environment_id = db.query(DbJobEnvironment.job_environment_id).filter(DbJobEnvironment.job_id == request.job_id).filter(DbJobEnvironment.environment_id == request.environment_id).first()
    job_environment_id = job_environment_id["job_environment_id"]
    db.execute(f"select * from create_admin_task('{job_environment_id}')")
    db.commit()
    tasks = db.execute("select * from get_admin_task()").all()
    return {"tasks":tasks}