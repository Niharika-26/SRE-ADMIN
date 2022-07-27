from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
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