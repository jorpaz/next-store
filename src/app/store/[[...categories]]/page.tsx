interface CategoryProps {
    params: {
        categories: string[]
    }
}

export default function Categories(props: CategoryProps) {
    console.log(props);
    const { categories } = props.params;
    //console.log(categories);
    return (
        <h1>Categoría Dinámica: {categories}</h1>
    )
}