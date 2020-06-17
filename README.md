# Create CED version

Github Action to create an empty version within a CloudEdgeDistribution project.

## Inputs

### `cli-token`

**Required** CloudEdgeDistribution CLI token. Use `ced login --ci` to obtain a CLI token.

### `environment`

Environment to use in CloudEdgeDistribution, if not specified will use the default environment in ced.json

## Output

### `version`

Created version name

## Example usage

```yaml
- uses: MerthinTechnologies/create-ced-version@v1
  id: create-version
  with:
    cli-token: ${{ secrets.CED_CLI_TOKEN }}
    environment: 'production'
- name: Get the output version
  run: echo "Version ${{ steps.create-version.outputs.version }} created"  
```