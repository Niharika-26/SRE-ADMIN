from pydantic import BaseModel
from typing import Optional,List

class TaskBase(BaseModel):
    taskname: str
    environmentname: str
    currenttask: Optional[dict]

class Task(BaseModel):
    taskname:str
    envirnmentname:str
    responsedata:str
    duedate:str
    modifiedat:str
    status:str  
class LookUpData(BaseModel):
    environments:List
    jobs:List
    tasks:List