export function polygonVertices(cx:number=1,cy:number=1,r:number=1,n:number=3){
    if(n<3) throw Error('No polygon Possible with less than 3 sides.')
        function generateVertices(cx:number,cy:number,k:number,r:number,n:number){
    return [r*Math.cos(2*Math.PI*k/n)+cx,r*Math.sin(2*Math.PI*k/n)+cy]
    }
    return Array(n).fill(0).map((_,index)=>generateVertices(cx,cy,index,r,n));
}
export function polygonPath(cx:number=1,cy:number=1,r:number=1,n:number=3){
    const vertices=polygonVertices(cx,cy,r,n).map(el=>el.join(' '));
    const v0=vertices[0];
    return [`M${v0}`,...vertices.slice(1).map(el=>`L${el}`) ,`L${v0}`].join(', ')
}

export function outlineStarPath(cx:number=1,cy:number=1,r:number=1,n:number=5){
    const vertices=polygonVertices(cx,cy,r,n);
    const outlinePath= Array(n).fill(0).map((_,index)=>vertices[index*2%n]);
    return [`M${vertices[0]}`,...outlinePath.slice(1).map(el=>`L${el}`) ,`L${outlinePath[0]}`].join(', ')
}
