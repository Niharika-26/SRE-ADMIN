from pydantic import BaseModel
from typing import List

# Schema for the task creation request body
class TaskBase(BaseModel):
    job_id: str
    environment_id: str
    
# Schema for Lookup data
class LookUpData(BaseModel):
    jobs:List
    tasks:List
