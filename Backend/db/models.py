from .database import Base
from sqlalchemy import Column, Integer, String,DateTime

class DbEnvironment(Base):
    __tablename__ = 'environment'
    environment_id = Column(primary_key=True)
    name = Column(String)

class DbJob(Base):
    __tablename__='job'
    job_id = Column(primary_key=True)
    name = Column(String)

class DbJobEnvironment(Base):
    __tablename__='job_environment'
    job_environment_id = Column(primary_key=True)
    job_id = Column(String)
    environment_id = Column(String)

class DbTask(Base):
    __tablename__ ='task'
    task_id=Column(primary_key=True)
    resultant_data=Column(String)
    createdby_job_environment_id = Column(String)
    due_date=Column(DateTime)
    last_modified_date=Column(DateTime)
    status = Column(String)
