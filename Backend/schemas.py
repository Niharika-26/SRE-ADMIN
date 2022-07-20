from pydantic import BaseModel

class TaskBase(BaseModel):
    taskname: str
    environmentname: str