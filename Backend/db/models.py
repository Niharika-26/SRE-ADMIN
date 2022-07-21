from .database import Base
from sqlalchemy import Column, Integer, String

class DbEnvironment(Base):
    __tablename__ = 'environment'
    environment_id = Column(primary_key=True)
    name = Column(String)

class DbJob(Base):
    __tablename__='job'
    job_id = Column(primary_key=True)
    name = Column(String)