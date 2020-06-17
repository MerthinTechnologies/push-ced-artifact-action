# Push CED artifact

Github Action to push a CloudEdgeDistribution artifact.

## Inputs

### `cli-token`

CloudEdgeDistribution CLI token. If not specified it'll try to resolve the CLI token from environment variable `CED_CLI_TOKEN`.

### `environment`

Environment to use in CloudEdgeDistribution. If not specified it'll try to resolve it from environment variable `CED_ENVIRONMENT`, it'll use the default environment in ced.json otherwise.

### `version`

A version name where to push the artifact. A new version will be created if it isn't specified.

### `push-as-draft`

Push artifact as draft. The version will be published after pushing artifact if it isn't specified.

### `path`

Path to the CloudEdgeDistribution project. If not specified it'll try to resolve it from environment variable `CED_PROJECT_PATH`, it'll use current folder otherwise.

## Example usage

```yaml
- uses: MerthinTechnologies/push-ced-artifact-action@v1
  with:
    path: ${{ env.PROJECT_PATH }}
    cli-token: ${{ secrets.CED_CLI_TOKEN }}
    environment: 'production'
    version: ${{ env.VERSION }}
    push-as-draft: true
```
