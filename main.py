from fastapi import FastAPI

app = FastAPI()
from fastapi.middleware.cors import CORSMiddleware



# Enable CORS for all origins (you should restrict this in a production environment)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Set this to the list of allowed origins in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)







@app.get("/")
async def root():
    return {"message": "Hello World"}



@app.get("/auth/{employee_id}")
async def read_item(employee_id: int):
    return {"employee_id": employee_id, "valid": True}

@app.get("/auth/otp/{otp}")
async def read_item(otp: int):
    return {"otp": otp, "valid": True}
