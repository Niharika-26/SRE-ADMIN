from pydantic import BaseModel
from typing import Optional,List

class TaskBase(BaseModel):
    job_id: str
    environment_id: str
    currenttask: Optional[dict]

class Task(BaseModel):
    taskname:str
    envirnmentname:str
    responsedata:str
    duedate:str
    modifiedat:str
    status:str  
class LookUpData(BaseModel):
    jobs:List
    tasks:List