# Push CED artifact

Github Action to push a CloudEdgeDistribution artifact.

## Inputs

### `cli-token`

**Required** CloudEdgeDistribution CLI token. Use `ced login --ci` to obtain a CLI token.

### `environment`

Environment to use in CloudEdgeDistribution, if not specified will use the default environment in ced.json

### `version`

A version name where to push the artifact. A new version will be created if it isn't specified.

### `push-as-draft`

Push artifact as draft. The version will be published after pushing artifact if it isn't specified.

### `path`

Path to the CloudEdgeDistribution project, default is current folder.

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
