export const FALLBACK_PAGE_HTML = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resource Not Registered</title>
    <style>
        /* Global Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body,
        html {
            display: flex;
            font-family: 'Arial', sans-serif;
            width: 100%;
            height: 100%;
        }

        body {
            background: linear-gradient(to right, #4facfe, #00f2fe);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;
        }


        .container {
            text-align: center;
            padding: 30px;
            max-width: 500px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 12px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        h1 {
            font-size: 48px;
            color: #f44336;
            font-weight: bold;
            margin-bottom: 20px;
        }

        p {
            font-size: 18px;
            color: #333;
            margin-bottom: 30px;
        }

        .cta {
            padding: 12px 24px;
            background-color: #ff9800;
            color: white;
            font-size: 16px;
            font-weight: bold;
            text-decoration: none;
            border-radius: 8px;
            transition: background-color 0.3s ease;
        }

        .cta:hover {
            background-color: #e68900;
        }

        .emoji {
            font-size: 80px;
            margin-bottom: 20px;
        }

        .footer {
            font-size: 14px;
            color: #555;
            margin-top: 20px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            h1 {
                font-size: 36px;
            }

            p {
                font-size: 16px;
            }

            .cta {
                font-size: 14px;
                padding: 10px 20px;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="emoji">🚫</div>
        <h1>Resource Not Registered</h1>
        <p>Oops! The resource you are looking for isn't registered or available at this time.</p>
        <a href="/" class="cta">Go Back to Home</a>
        <div class="footer">If you believe this is an error, please contact support.</div>
    </div>
</body>

</html>
`;
