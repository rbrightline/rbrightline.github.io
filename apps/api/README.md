# Api




    "to": "ts-node ./node_modules/typeorm/cli",
    "migration:create": "npm run to -- migration:create",
    "migration:generate": "npm run to -- migration:generate -d ./migrations/data-source.ts",
    "migration:run": "npm run to -- migration:run  -d ./migrations/data-source.ts",
    "migration:revert": "npm run to -- migration:revert -d ./migrations/data-source.ts"