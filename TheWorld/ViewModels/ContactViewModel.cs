using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheWorld.ViewModels
{
    public class ContactViewModel
    {

        [Required]  /* Shows that the field must be filled */
        public string Name { set; get; }
        [Required]
        [EmailAddress]
        public string Email { set; get; }
        [Required]
        [StringLength(4096, MinimumLength =10)]
        public string Message { set; get; }
    }
}
