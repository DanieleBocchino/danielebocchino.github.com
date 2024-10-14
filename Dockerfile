FROM node:18-alpine

# Aggiorna e installa git
RUN apk update && apk add git

# Imposta la directory di lavoro
WORKDIR /app

# Copia i file necessari
COPY package.json /app

# Installa le dipendenze (uso di --legacy-peer-deps per evitare problemi di dipendenze)
RUN npm install --legacy-peer-deps

# Copia il resto dell'applicazione
COPY . /app

# Espone la porta 3000 (usata dall'app React in dev mode)
EXPOSE 3000

# Avvia l'applicazione in modalità sviluppo
CMD ["npm", "start"]
