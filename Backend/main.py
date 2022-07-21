from asyncio import tasks
from typing import Dict
from fastapi import FastAPI,Request
import json
from datetime import date,timedelta
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from schemas import TaskBase
from router import tasks_get,tasks_post

app = FastAPI()

origins = ['http://localhost:3000','http://127.0.0.1:3000']
app.add_middleware(CORSMiddleware,
allow_origins = origins,
allow_credentials = True,
allow_methods = ['*'],
allow_headers = ['*']
)

app.include_router(tasks_get.router)
app.include_router(tasks_post.router)


    












