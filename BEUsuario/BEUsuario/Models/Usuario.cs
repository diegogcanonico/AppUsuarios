using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BEUsuario.Models
{
    public class Usuario
    {
        [Key]
        public int IdUsuario { get; set; }

        [Required]
        [Column(TypeName = "varchar(30)")]
        public string UserName { get; set; }

        [Required]
        [Column(TypeName = "varchar(30)")]
        public string Nombre { get; set; }

        [Required]
        [Column(TypeName = "varchar(30)")]
        public string Email { get; set; }

        [Column(TypeName = "varchar(30)")]
        public string Telefono { get; set; }

    }
}
