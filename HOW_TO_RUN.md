# How to Run the Website Locally

I have successfully started the website locally on your machine. Here are the steps to do it yourself in the future.

## Prerequisites
- Node.js installed (I verified you have v22.21.1).

## Initial Setup
1.  **Install Dependencies**:
    Run the following command in your terminal to install the necessary packages. I had to fix a small syntax error in your `package.json` (a trailing comma) for this to work.
    ```bash
    npm install
    ```

## Running the Development Server
1.  **Start the Server**:
    Use the following command to start the local development server.
    ```bash
    npm run serve
    ```

    *Note: By default, this tries to run on port `9000`. If that port is busy (as it was during my test), you can specify a different port like this:*
    ```bash
    npm run serve -- --port 9001
    ```

2.  **Access the Website**:
    Open your browser and navigate to:
    [http://localhost:9001](http://localhost:9001) (or whichever port the terminal displays).

## Troubleshooting
- If you see `EADDRINUSE`, it means the port is taken. Use the `--port <number>` flag to pick a different one.
