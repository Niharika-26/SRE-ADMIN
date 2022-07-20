from pydantic import BaseModel
from typing import Optional

class TaskBase(BaseModel):
    taskname: str
    environmentname: str
    currenttask: Optional[dict]