import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Creating Database Engine
engine = create_engine(os.environ['DATABASE_URL']
,echo=True
)

# Creating Session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Creating Base Model
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()