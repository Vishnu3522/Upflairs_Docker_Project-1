FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT 3001
ENV MONGODB_URI mongodb+srv://vishnukumarit24:7yY0sqvdFn5QhTXe@cluster0.94fcjuv.mongodb.net/?retryWrites=true&w=majority
CMD [ "node", "index.js"]