import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function RecipeCard({ recipe }) {
  const { title, slug, cookingTime, thumbnail } = recipe.fields
  
    return (
    <div className="card">
      <div className="featured">
        <Image 
            src={'https:' + thumbnail.fields.file.url}
            width={522} //width={thumbnail.fields.file.details.image.width}
            height={347} //height={thumbnail.fields.file.details.image.height}
        />
      </div>
      
      <div className="content">
        <div className="info">
            <h4>{ title }</h4>
            <p>Takes approx { cookingTime } mins to make</p>
        </div>

        <div className="actions">
            <Link legacyBehavior href={'/recipes/' + slug}><a>Cook This</a></Link>
        </div>
      </div>

      <style jsx>{`
        .card {
          transform: rotateZ(-1deg);
        }
        .content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          margin: 0;
          position: relative;
          top: -40px;
          left: -10px;
        }
        .info {
          padding: 16px;
        }
        .info h4 {
          margin: 4px 0;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
        }
        .actions {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
        }
        .actions a {
          color: #fff;
          background: #ff9c2a;
          padding: 16px 24px;
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}
