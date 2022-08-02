from fastapi import FastAPI
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from router import tasks_get,tasks_post

# Create a FastAPI application
app = FastAPI()

# Add CORS middleware
origins = ['http://localhost:13000','http://127.0.0.1:13000']
app.add_middleware(CORSMiddleware,
allow_origins = origins,
allow_credentials = True,
allow_methods = ['*'],
allow_headers = ['*']
)

#  Add the routers
app.include_router(tasks_get.router)
app.include_router(tasks_post.router)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=18000)