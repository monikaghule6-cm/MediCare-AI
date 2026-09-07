import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from public
app.use(express.static(path.join(process.cwd(),'public')));

// Fallback to index.html for SPA routes
app.get('*',(req,res)=>{
  res.sendFile(path.join(process.cwd(),'public','index.html'));
});

app.listen(PORT,()=>{
  console.log(`MediCare AI server running on http://localhost:${PORT}`);
});
