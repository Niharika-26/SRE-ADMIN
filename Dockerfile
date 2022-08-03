FROM python:3.10
ENV DATABASE_URL=postgresql://sreintern:TxSyHPDoaw44396z@34.135.5.178/sreinsights_dcl
COPY ./Backend /app
COPY ./Backend/requirements.txt /app
WORKDIR /app
RUN pip install -r requirements.txt

CMD ["uvicorn","main:app","--host=0.0.0.0","--port=18000","--reload"]
