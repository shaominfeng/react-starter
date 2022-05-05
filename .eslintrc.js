module.exports = {
    "extends": ["react-app"],
    "overrides": [
        {
            "files": ["**/*.ts?(x)"],
            "rules": {
                "additional-typescript-only-rule": "warn",
            }
        }
    ]
}