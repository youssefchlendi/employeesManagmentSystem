
# API Reference


<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="https://github.com/youssefchlendi/employeesManagmentSystem#readme">Back to main</a>
    </li>
    <li>
      <a href="#entreprises">Entreprises api</a>
      <ul>
        <li><a href="#get-all-entreprises">Get all</a></li>
        <li><a href="#get-entreprise">Get one</a></li>
        <li><a href="#add-entreprise">add</a></li>
        <li><a href="#update-entreprise">update</a></li>
        <li><a href="#delete-entreprise">delete</a></li>
      </ul>
    </li>
    <li>
      <a href="#employes">Employes api</a>
      <ul>
        <li><a href="#get-all-employes">Get all</a></li>
        <li><a href="#get-employe">Get one</a></li>
        <li><a href="#add-employe">add</a></li>
        <li><a href="#update-employe">update</a></li>
        <li><a href="#delete-employe">delete</a></li>
      </ul>
    </li>
    <li>
      <a href="#rebrique">Rebrique api</a>
      <ul>
        <li><a href="#get-all-rebriques">Get all</a></li>
        <li><a href="#get-rebrique">Get one</a></li>
        <li><a href="#add-rebrique">add</a></li>
        <li><a href="#update-rebrique">update</a></li>
        <li><a href="#delete-rebrique">delete</a></li>
      </ul>
    </li>
    <li>
      <a href="#fiches">Fiches api</a>
      <ul>
        <li><a href="#get-all-fiches">Get all</a></li>
        <li><a href="#get-fiche">Get one</a></li>
        <li><a href="#add-fiche">add</a></li>
        <li><a href="#update-fiche">update</a></li>
        <li><a href="#delete-fiche">delete</a></li>
      </ul>
    </li>

  </ol>
</details>



## Entreprises
#### Get all entreprises

```http
  POST /api/entreprise
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `search` | `string` | **Optional**. Search for entreprise |

#### Get entreprise

```http
  POST /api/entreprise/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of entreprise to fetch |

#### add entreprise

```http
  POST /api/entreprise/add
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `titre`      | `string` | **Required**. Titre of entreprise to add |
| `matricule_fiscale`      | `string` | **Required**. matricule fiscale of entreprise to add |
| `registre_commerce`      | `string` | **Required**. registre commerce of entreprise to add  |
| `adresse`      | `string` | **Required**. adresse fiscale of entreprise to add |
| `ville`      | `string` | **Required**. ville fiscale of entreprise to add |
| `activités`      | `string` | **Required**. activités fiscale of entreprise to add |

#### update entreprise

```http
  PUT /api/entreprise/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of entreprise to update |
| `titre`      | `string` | **Optional**. Titre of entreprise to update |
| `matricule_fiscale`      | `string` | **Optional**. matricule fiscale of entreprise to update |
| `registre_commerce`      | `string` | **Optional**. registre commerce of entreprise to update  |
| `adresse`      | `string` | **Optional**. adresse fiscale of entreprise to update |
| `ville`      | `string` | **Optional**. ville fiscale of entreprise to update |
| `activités`      | `string` | **Optional**. activités fiscale of entreprise to update |


#### delete entreprise

```http
  DELETE /api/entreprise/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of entreprise to delete |

## Employes

#### Get all employes

```http
  POST /api/employe
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `search` | `string` | **Optional**. Search for employe |

#### Get employe

```http
  POST /api/employe/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of employe to fetch |

#### add employe

```http
  POST /api/employe/add
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nom`      | `string` | **Required**. nom of employe to add |
| `prenom`      | `string` | **Required**. prenom of employe to add |
| `cin`      | `string` | **Required**. cin of employe to add  |
| `mat_cnss`      | `string` | **Required**. matricule cnss fiscale of employe to add |
| `fonction`      | `string` | **Required**. fonction fiscale of employe to add |
| `entreprise_id`      | `string` | **Required**. entreprise_id fiscale of employe to add |

#### update employe

```http
  PUT /api/employe/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of employe to update |
| `nom`      | `string` | **Optional**. nom of employe to update |
| `prenom`      | `string` | **Optional**. prenom of employe to update |
| `cin`      | `string` | **Optional**. cin of employe to update  |
| `mat_cnss`      | `string` | **Optional**. matricule cnss fiscale of employe to update |
| `fonction`      | `string` | **Optional**. fonction fiscale of employe to update |
| `entreprise_id`      | `string` | **Optional**. entreprise_id fiscale of employe to update |


#### delete employe

```http
  DELETE /api/employe/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of employe to delete |

## Rebriques

#### Get all rebriques

```http
  GET /api/rebrique
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |


#### add rebrique

```http
  POST /api/rebrique/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `titre`      | `string` | **Required**. titre of rebrique to add |

#### update rebrique

```http
  PUT /api/rebrique/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of rebrique to update |
| `titre`      | `string` | **Optional**. titre of rebrique to update |


#### delete rebrique

```http
  DELETE /api/rebrique/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of rebrique to delete |


## Fiches

#### Get all fiches

```http
  POST /api/fiche
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `search` | `string` | **Optional**. Search for fiche |

#### Get fiche

```http
  POST /api/fiche/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of fiche to fetch |

#### add fiche

```http
  POST /api/fiche/add
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `date`      | `date` | **Required**. date of fiche to add |
| `employe_id`      | `string` | **Required**. employe_id of fiche to add |

#### update fiche

```http
  PUT /api/fiche/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of fiche to update |
| `date`      | `date` | **Optional**. date of fiche to add |
| `employe_id`      | `string` | **Optional**. employe_id of fiche to add |


#### delete fiche

```http
  DELETE /api/fiche/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of fiche to delete |
